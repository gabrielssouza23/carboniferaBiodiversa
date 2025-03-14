import React, { useState } from 'react';
import { Modal, Form, Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import api from '../../services/api';

const CreateSpeciesModal = ({ isVisible, onClose, onAddSpecies }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [extraImages, setExtraImages] = useState([]); // Estado para imagens extras

  // Função para remover o prefixo base64
  const removeBase64Prefix = (base64String) => {
    return base64String.replace(/^data:image\/[a-z]+;base64,/, "");
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      setLoading(true);

      // Converte a imagem principal para base64
      const base64Image = await getBase64(fileList[0]?.originFileObj);

      // Remove o prefixo do base64 da imagem principal
      const cleanBase64 = removeBase64Prefix(base64Image);

      // Converte cada imagem extra para base64 e remove o prefixo
      const extraImagesBase64 = await Promise.all(
        extraImages.map(async (file) => {
          const base64 = await getBase64(file.originFileObj);
          return removeBase64Prefix(base64);
        })
      );

      const referencias = values.referencias.split('\n').filter(ref => ref.trim() !== '');

      // Cria o objeto com todos os dados da espécie
      const speciesData = {
        nomePopular: values.nomepopular,
        nomeCientifico: values.nomecientifico,
        reino: values.reino,
        filo: values.filo,
        classe: values.classe,
        ordem: values.ordem,
        familia: values.familia,
        genero: values.genero,
        especie: values.especie,
        descricao: values.descricao,
        thumb: cleanBase64, // Imagem principal em base64
        extraImages: extraImagesBase64, // Imagens extras em base64
        references: referencias
      };

      console.log('speciesData:', speciesData);

      await api.post('/species/specie-create', speciesData, {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${sessionStorage.getItem('authToken')}`
        }
      });

      form.resetFields();
      setFileList([]);
      setExtraImages([]); // Reseta a lista de imagens extras
      onAddSpecies(values); // Atualiza a tabela com a nova espécie
      onClose();
    } catch (error) {
      console.error('Erro ao criar espécie:', error);
      message.error('Erro ao criar espécie e referências.');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleExtraImagesChange = ({ fileList }) => {
    setExtraImages(fileList);
  };

  // Função para converter a imagem em base64
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  };

  return (
    <Modal
      title="Adicionar Nova Espécie"
      visible={isVisible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancelar
        </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
          Adicionar
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Nome Popular"
          name="nomepopular"
          rules={[{ required: true, message: 'Por favor, insira o nome popular!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Nome Científico"
          name="nomecientifico"
          rules={[{ required: true, message: 'Por favor, insira o nome científico!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Reino"
          name="reino"
          rules={[{ required: true, message: 'Por favor, insira o reino!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Filo"
          name="filo"
          rules={[{ required: true, message: 'Por favor, insira o filo!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Classe"
          name="classe"
          rules={[{ required: true, message: 'Por favor, insira a classe!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Ordem"
          name="ordem"
          rules={[{ required: true, message: 'Por favor, insira a ordem!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Família"
          name="familia"
          rules={[{ required: true, message: 'Por favor, insira a família!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Gênero"
          name="genero"
          rules={[{ required: true, message: 'Por favor, insira o gênero!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Espécie"
          name="especie"
          rules={[{ required: true, message: 'Por favor, insira a espécie!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Descrição"
          name="descricao"
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        {/* Campo de upload de foto principal */}
        <Form.Item label="Foto da Espécie">
          <Upload
            listType="picture"
            maxCount={1}
            fileList={fileList}
            onChange={handleFileChange}
            beforeUpload={() => false} // Impede o upload automático
          >
            <Button icon={<UploadOutlined />}>Escolher Foto</Button>
          </Upload>
        </Form.Item>

        {/* Campo de upload de imagens extras */}
        <Form.Item label="Imagens Extras">
          <Upload
            listType="picture"
            multiple
            fileList={extraImages}
            onChange={handleExtraImagesChange}
            beforeUpload={() => false} // Impede o upload automático
          >
            <Button icon={<UploadOutlined />}>Escolher Imagens Extras</Button>
          </Upload>
        </Form.Item>

        {/* Campo de Referências */}
        <Form.Item
          label="Referências"
          name="referencias"
          rules={[{ required: true, message: 'Por favor, insira pelo menos uma referência!' }]}
        >
          <Input.TextArea rows={4} placeholder="Insira uma referência por linha" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateSpeciesModal;
