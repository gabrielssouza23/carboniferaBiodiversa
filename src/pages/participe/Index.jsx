import React from "react";
import MainContainer from "../../components/core/mainContainer";
import Divider from "../../components/divider";
import { Form, Input, Button, message } from "antd";
import Footer from "../../components/footer";
import api from "../../services/api";

export default function Participe() {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      await api.post('/generic/participacao', {
        name: values.name,
        origin: values.origin, // Corrigido para 'origin' (mesmo nome do Form.Item)
        message: values.message,
        contact: values.contact
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      // Feedback visual de sucesso
      message.success('Participação enviada com sucesso!');
      
      // Limpa o formulário após o envio
      form.resetFields();

    } catch (error) {
      console.error('Erro ao enviar participação:', error);
      
      // Feedback visual de erro
      message.error('Ocorreu um erro ao enviar sua participação. Por favor, tente novamente.');
    }
  };

  return (
    <MainContainer currentPage="contribution">
      <div className="sm:px-16 px-5">
        <h1 className="text-4xl text-custom-green items-center justify-center flex pb-5">
            Deixe Sua Participação Aqui!
        </h1>
        <Divider centered={true} />
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item
            name="name"
            label="Nome"
            rules={[{ required: true, message: "Por favor, insira seu nome!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="origin" // Nome mantido como 'origin'
            label="De onde você é?"
            rules={[
              { required: true, message: "Por favor, informe sua localização!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="message"
            label="Mensagem (opcional)"
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item
            name="contact"
            label="Contato (opcional - email ou telefone)"
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit"
              className="w-full h-10"
              style={{ height: '40px' }}
            >
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Footer />
    </MainContainer>
  );
}   