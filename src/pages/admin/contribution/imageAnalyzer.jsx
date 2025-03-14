import React, { useState, useEffect } from "react";
import { Button, Input, Spin, message } from "antd";
import Divider from "../../../components/divider";
import api from "../../../services/api"; // Certifique-se que o 'api' esteja configurado corretamente.

const ImageAnalyzer = ({ imageSrc }) => {
  const [image, setImage] = useState(null);
  const [responseText, setResponseText] = useState(""); // Resposta da API
  const [loading, setLoading] = useState(false); // Estado de carregamento

  // Atualiza a imagem quando imageSrc mudar
  useEffect(() => {
    setImage(imageSrc); // Define o valor de image com imageSrc passado via props
    console.log("imageSrc atualizado:", imageSrc);
  }, [imageSrc]);

  // Enviar imagem para o backend
  const handleAnalyze = async () => {
    setLoading(true);
    setResponseText(""); // Limpa o texto acumulado antes de uma nova requisição

    try {
      const response = await api.post("/species/analyze-image", {
        image: image, // A imagem é enviada como Base64 ou conforme esperado pela API
      }, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
        responseType: "text", // Certificando-se de que estamos recebendo os dados como texto
      });

      const lines = response.data.split("\n"); // Divide o texto em linhas

      let responseString = "";
      for (const line of lines) {
        if (line.startsWith("data: ")) {
          const jsonData = line.replace("data: ", "").trim();
          if (jsonData === "[DONE]") {
            setLoading(false);
            break; // Encerra o processamento ao receber [DONE]
          }

          try {
            const parsedData = JSON.parse(jsonData);
            const content = parsedData?.choices?.[0]?.delta?.content;

            if (content) {
              responseString += content; // Acumula o texto
              setResponseText((prevText) => prevText + content); // Atualiza o estado acumulando o texto
            }
          } catch (error) {
            console.error("Erro ao processar o chunk JSON:", error);
          }
        }
      }
      setLoading(false); // Garante que o carregamento pare
    } catch (error) {
      console.error("Erro ao analisar a imagem:", error);
      message.error("Erro ao processar a imagem. Tente novamente.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-3/4 m-auto">
      <h2 className="text-center text-xl font-semibold font-poppins uppercase leading-9 tracking-tight text-custom-green">
        Analisar imagem
      </h2>
      <Divider centered={true} />

      <div className=" flex space-x-2 m-2">
        <Button
          type="primary"
          onClick={handleAnalyze}
          disabled={!image || loading}
          style={{ color: "white" }}
        >
          Analisar Imagem
        </Button>
      </div>

      {loading && (
        <div style={{ marginTop: 20 }}>
          <Spin tip="Analisando..." />
        </div>
      )}

      <Input.TextArea
        value={responseText} // Exibe o texto acumulado
        rows={4}
        placeholder="O resultado será exibido aqui."
        style={{ marginTop: 20 }}
        readOnly
      />
    </div>
  );
};

export default ImageAnalyzer;
