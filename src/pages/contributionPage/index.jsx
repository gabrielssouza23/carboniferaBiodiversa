import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Upload, DatePicker, message } from 'antd';
import ExifReader from 'exifreader';
import MainContainer from '../../components/core/mainContainer';
import Footer from '../../components/footer';
import Divider from '../../components/divider';
import { UploadOutlined } from '@ant-design/icons';
import api from '../../services/api';

export default function Contribution() {
    const [form] = Form.useForm();
    const [files, setFiles] = useState([]);

    const handleFileChange = (info) => {
        if (info.fileList.length > 5) {
            message.error('Você pode fazer o upload de até 5 fotos.');
            return;
        }
        setFiles(info.fileList);
    };

    const removeBase64Prefix = (base64String) => {
        return base64String.replace(/^data:image\/[a-z]+;base64,/, "");
    };

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
            reader.readAsDataURL(file);
        });
    };

    const handleSubmit = async (values) => {
        console.log('Valores do Formulário:', values);
        console.log('Arquivos selecionados:', files);

        // Verifica se a data está definida
        if (!values.date) {
            message.error('Por favor, selecione a data e hora!');
            return; // Interrompe o envio caso a data não esteja definida
        }

        // Converte cada imagem para base64 e remove o prefixo
        const filesBase64 = await Promise.all(
            files.map(async (file) => {
                const base64 = await getBase64(file.originFileObj);
                return removeBase64Prefix(base64);
            })
        );

        let imagesGps = [];

        // Extrair metadados dos arquivos
        await Promise.all(files.map(async (file) => {
            const arrayBuffer = await file.originFileObj.arrayBuffer();
            try {
                const tags = await ExifReader.load(arrayBuffer);
                const lat = tags['GPSLatitude'] ? tags['GPSLatitude'].description : 'N/A';
                const long = tags['GPSLongitude'] ? tags['GPSLongitude'].description : 'N/A';
                const date = tags['DateTime'] ? tags['DateTime'].description : 'N/A';

                let formattedDate = 'N/A';
                if (date !== 'N/A') {
                    // Separa a data e a hora
                    const [datePart, timePart] = date.split(' ');
                
                    // Substitui os dois pontos por hífens apenas na parte da data
                    const formattedDatePart = datePart.replace(/:/g, '-');
                
                    // Recombina a data formatada com a hora original
                    formattedDate = `${formattedDatePart} ${timePart}`;
                }

                imagesGps.push({ latitude: lat, longitude: long, dateFile: formattedDate });
            } catch (error) {
                console.error('Error loading EXIF data:', error);
            }
        }));

        // Cria um objeto contendo todos os dados do formulário
        const dateFormatted = values.date.format('YYYY-MM-DD HH:mm:ss');  // Formata a data

        const formDataObject = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            location: values.location,
            date: dateFormatted,  // Use a data formatada
            images: filesBase64,
            imagesGps: imagesGps
        };

        console.log('Dados enviados:', formDataObject);

        try {
            // Envia o objeto como JSON
            await api.post('/species/contribution-create', formDataObject, {
                headers: {
                    'Content-Type': 'application/json'  // Define o Content-Type como JSON
                }
            });

            message.success('Contribuição enviada com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar a contribuição:', error);
            message.error('Erro ao enviar a contribuição. Tente novamente.');
        }
    };

    return (
        <MainContainer currentPage='contribution'>
            <div className='sm:px-16 px-5'>
                <h1 className='text-4xl text-custom-green items-center justify-center flex pb-5'>
                    Contribuição
                </h1>
                <Divider centered={true} />
                <Form form={form} onFinish={handleSubmit} layout="vertical" >
                    <Form.Item
                        name="name"
                        label="Nome"
                        rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}
                    >
                        <Input className='contributionInput' />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, type: 'email', message: 'Por favor, insira um email válido!' }]}
                    >
                        <Input className='contributionInput' />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Número de Telefone (opcional)"
                    >
                        <Input className='contributionInput' />
                    </Form.Item>

                    <Form.Item
                        name="location"
                        label="Localização da Espécie"
                        rules={[{ required: true, message: 'Por favor, insira a localização da espécie!' }]}
                    >
                        <Input className='contributionInput' />
                    </Form.Item>

                    <div className="">
                        <Form.Item
                            name="date"
                            label="Dia e Hora da Foto"
                            rules={[{ required: true, message: 'Por favor, selecione a data e hora!' }]}
                        >
                            <DatePicker showTime className='contributionInput' />
                        </Form.Item>

                        <Form.Item
                            label="Upload de Fotos"
                            rules={[{ required: true, message: 'Por favor, faça o upload de pelo menos uma foto!' }]}
                        >
                            <Upload
                                listType='picture'
                                fileList={files}
                                onChange={handleFileChange}
                                beforeUpload={() => false} // Impede o upload automático
                                multiple
                                rules={[{ required: true, message: 'Por favor, faça o upload de pelo menos uma foto!' }]} // Adiciona regra de validação para o upload de fotos
                            >
                                <Button id='uploadContributionBtn' icon={<UploadOutlined />}>Selecionar Fotos</Button>
                            </Upload>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Enviar Contribuição
                            </Button>
                        </Form.Item>
                    </div>
                </Form>

            </div>
            <Footer />
        </MainContainer>
    );
}
