import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import { Button } from 'antd';
import styled from 'styled-components';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/loader';

export default function OverflowCard() {
    const navigate = useNavigate();
    const [species, setSpecies] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const limit = 10; // Número máximo de espécies por requisição

    const fetchSpecies = React.useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await api.get(`/species/species-all-catalog?limit=${limit}`);
            setSpecies(response.data);
            console.log(response.data); // Log dos dados obtidos
        } catch (err) {
            console.error("ops! ocorreu um erro: " + err);
        } finally {
            setIsLoading(false);
        }
    }, []); // Apenas limit como dependência
    
    React.useEffect(() => {
        fetchSpecies();
    }, [fetchSpecies]); // Chama apenas fetchSpecies

    const CustomButton = styled(Button)`
        background-color: #5F6D36 !important;
        color: white !important;
        font-weight: bold !important;

        &:hover {
            background-color: #5F6D36 !important;
            color: #f0f0f0 !important;
            transform: scale(1.05);
            transition: transform 0.3s;
        }
    `;

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    {species.length > 0 ? (
                        species.map((specie) => (
                            <Card variant="outlined" sx={{ width: 320 }} key={specie.id}>
                                <CardOverflow>
                                    <AspectRatio ratio="2">
                                        <img
                                            src={specie.thumb}
                                            srcSet={`${specie.thumb} 2x`}
                                            loading="lazy"
                                            alt={specie.nomepopular}
                                        />
                                    </AspectRatio>
                                </CardOverflow>
                                <CardContent>
                                    <Typography level="title-lg" sx={{ color: '#5F6D36', fontFamily: 'Poppins' }}>
                                        {specie.nomepopular}
                                    </Typography>
                                    <Typography level="body-sm">{specie.nomecientifico}</Typography>
                                    <CustomButton type="primary" onClick={() => navigate(`/catalogo/${specie.id}`)}>
                                        Ver Mais
                                    </CustomButton>
                                </CardContent>
                                <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                                    <Divider inset="context" />
                                </CardOverflow>
                            </Card>
                        ))
                    ) : (
                        <Typography>Nenhuma espécie encontrada.</Typography>
                    )}
                </>
            )}
        </>
    );
}
