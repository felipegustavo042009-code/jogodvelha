const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos do React (quando estiverem na pasta build)
app.use(express.static(path.join(__dirname, 'build')));

// Sua API existente
const API_KEY = '4e5d09c392017fe0dc2fabe71f5eb344';

const API_HOST = 'v3.football.api-sports.io';

app.get('/teams/brazil', async (req, res) => {
  console.log('🚀 BUSCANDO TIMES BRASILEIROS COM IMAGENS...');
  
  try {
    const response = await fetch(`https://${API_HOST}/teams?country=Brazil`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST
      }
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.response && data.response.length > 0) {
      console.log(`🎉 ${data.response.length} times encontrados!`);
      
      const timesComImagens = data.response.map(time => {
        return {
          ...time,
          team: {
            ...time.team,
            logo: `https://media.api-sports.io/football/teams/${time.team.id}.png`
          },
          venue: time.venue ? {
            ...time.venue,
            image: time.venue.id ? `https://media.api-sports.io/football/venues/${time.venue.id}.png` : null
          } : null
        };
      });

      const timesOrdenados = timesComImagens.sort((a, b) => 
        a.team.name.localeCompare(b.team.name)
      );
      
      return res.json(timesOrdenados);
    } else {
      throw new Error('Nenhum time encontrado');
    }

  } catch (error) {
    console.error('❌ Erro na API:', error);
    
    const timesMock = [
      { 
        team: { 
          id: 131, 
          name: 'Corintias', 
          country: 'Brazil', 
          founded: 1895,
          logo: 'https://media.api-sports.io/football/teams/131.png'
        },
        venue: { 
          id: 234, 
          name: 'Maracanã', 
          city: 'Rio de Janeiro',
          image: 'https://media.api-sports.io/football/venues/234.png'
        }
      },
      { 
        team: { 
          id: 135, 
          name: 'Cruzeiro', 
          country: 'Brazil', 
          founded: 1930,
          logo: 'https://media.api-sports.io/football/teams/135.png'
        },
        venue: { 
          id: 235, 
          name: 'Morumbi', 
          city: 'São Paulo',
          image: 'https://media.api-sports.io/football/venues/235.png'
        }
      },
      { 
        team: { 
          id: 134, 
          name: 'Ceara', 
          country: 'Brazil', 
          founded: 1914,
          logo: 'https://media.api-sports.io/football/teams/134.png'
        },
        venue: { 
          id: 236, 
          name: 'Allianz Parque', 
          city: 'São Paulo',
          image: 'https://media.api-sports.io/football/venues/236.png'
        }
      }
    ];
    
    res.json(timesMock);
  }
});

// Rota para verificar se o servidor está rodando
app.get('/api/health', (req, res) => {
  res.json({ status: 'Servidor rodando!', timestamp: new Date().toISOString() });
});

// ⚠️ IMPORTANTE: Rota catch-all DEVE SER A ÚLTIMA
// Ela só será executada se nenhuma das rotas acima for correspondida
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log('\n🎉 SERVIDOR RODANDO!');
  console.log(`📍 Porta: ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📍 Times Brasil: http://localhost:${PORT}/teams/brazil`);
  console.log(`📍 React App: http://localhost:${PORT}/`);
});