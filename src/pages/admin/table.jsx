import React, { useState, useEffect } from 'react';
import { Form, Input, Popconfirm, Table, Typography, Modal, Button } from 'antd';
import api from '../../services/api';

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Por favor, insira ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const TableComponent = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState({
    descricao: '',
    all_references: ''
  });

  // Função para carregar dados da API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/species/species-all-crud`);
        if (response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  const edit = (record) => {
    form.setFieldsValue({
      nomepopular: '',
      nomecientifico: '',
      reino: '',
      filo: '',
      classe: '',
      ordem: '',
      familia: '',
      genero: '',
      especie: '',
      ...record,
    });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.id);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validação falhou:', errInfo);
    }
  };

  const showModal = (record) => {
    setModalData({
      descricao: record.descricao,
      all_references: record.all_references,
    });
    setEditingKey(record.id);
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    const newData = [...data];
    const index = newData.findIndex((item) => editingKey === item.id);
    if (index > -1) {
      const item = newData[index];
      newData.splice(index, 1, {
        ...item,
        descricao: modalData.descricao,
        all_references: modalData.all_references,
      });
      setData(newData);
      await api.put(`/species/update/${editingKey}`, {
        descricao: modalData.descricao,
        all_references: modalData.all_references,
      });
      setIsModalVisible(false);
      setEditingKey('');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingKey('');
  };

  const isEditing = (record) => record.id === editingKey; // Função para verificar se está editando

  const columns = [
    {
      title: 'Nome Popular',
      dataIndex: 'nomepopular',
      width: '15%',
      editable: true,
    },
    {
      title: 'Nome Científico',
      dataIndex: 'nomecientifico',
      width: '15%',
      editable: true,
    },
    {
      title: 'Reino',
      dataIndex: 'reino',
      width: '10%',
      editable: true,
    },
    {
      title: 'Filo',
      dataIndex: 'filo',
      width: '10%',
      editable: true,
    },
    {
      title: 'Classe',
      dataIndex: 'classe',
      width: '10%',
      editable: true,
    },
    {
      title: 'Ordem',
      dataIndex: 'ordem',
      width: '10%',
      editable: true,
    },
    {
      title: 'Família',
      dataIndex: 'familia',
      width: '10%',
      editable: true,
    },
    {
      title: 'Gênero',
      dataIndex: 'genero',
      width: '10%',
      editable: true,
    },
    {
      title: 'Espécie',
      dataIndex: 'especie',
      width: '10%',
      editable: true,
    },
    {
      title: 'Descrição',
      dataIndex: 'descricao',
      width: '20%',
      render: (text, record) => (
        <>
          <Button onClick={() => showModal(record)} style={{ marginLeft: 8 }}>Editar</Button>
        </>
      ),
    },
    {
      title: 'Ações',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.id)}
              style={{
                marginRight: 8,
              }}
            >
              Salvar
            </Typography.Link>
            <Popconfirm title="Cancelar?" onConfirm={cancel}>
              <a>Cancelar</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Editar
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
          rowKey="id"
          scroll={{ x: 'max-content' }} // Adicionando scroll lateral
        />
      </Form>

      <Modal
        title="Editar Descrição e Referências"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form layout="vertical">
          <Form.Item label="Descrição">
            <Input.TextArea
              value={modalData.descricao}
              onChange={(e) =>
                setModalData({ ...modalData, descricao: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="Referências">
            <Input.TextArea
              value={modalData.all_references}
              onChange={(e) =>
                setModalData({ ...modalData, all_references: e.target.value })
              }
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default TableComponent;
