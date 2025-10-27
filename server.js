const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos do React (quando estiverem na pasta build)
app.use(express.static(path.join(__dirname, 'build')));

// Sua API existente
const API_KEY = '079e7f22b000294a57d32de4221c031d0';

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
      name: 'Corinthians', 
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
      name: 'Ceará', 
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
  },
  { 
    team: { 
      id: 136, 
      name: 'Flamengo', 
      country: 'Brazil', 
      founded: 1895,
      logo: 'https://media.api-sports.io/football/teams/127.png'
    },
    venue: { 
      id: 237, 
      name: 'Maracanã', 
      city: 'Rio de Janeiro',
      image: 'https://media.api-sports.io/football/venues/237.png'
    }
  },
  { 
    team: { 
      id: 137, 
      name: 'Palmeiras', 
      country: 'Brazil', 
      founded: 1914,
      logo: 'https://media.api-sports.io/football/teams/121.png'
    },
    venue: { 
      id: 238, 
      name: 'Allianz Parque', 
      city: 'São Paulo',
      image: 'https://media.api-sports.io/football/venues/238.png'
    }
  },
  { 
    team: { 
      id: 138, 
      name: 'São Paulo', 
      country: 'Brazil', 
      founded: 1930,
      logo: 'https://media.api-sports.io/football/teams/126.png'
    },
    venue: { 
      id: 239, 
      name: 'Morumbi', 
      city: 'São Paulo',
      image: 'https://media.api-sports.io/football/venues/239.png'
    }
  },
  { 
    team: { 
      id: 139, 
      name: 'Grêmio', 
      country: 'Brazil', 
      founded: 1903,
      logo: 'https://media.api-sports.io/football/teams/130.png'
    },
    venue: { 
      id: 240, 
      name: 'Arena do Grêmio', 
      city: 'Porto Alegre',
      image: 'https://media.api-sports.io/football/venues/240.png'
    }
  },
  { 
    team: { 
      id: 140, 
      name: 'Internacional', 
      country: 'Brazil', 
      founded: 1909,
      logo: 'https://media.api-sports.io/football/teams/119.png'
    },
    venue: { 
      id: 241, 
      name: 'Beira-Rio', 
      city: 'Porto Alegre',
      image: 'https://media.api-sports.io/football/venues/241.png'
    }
  },
  { 
    team: { 
      id: 141, 
      name: 'Vasco da Gama', 
      country: 'Brazil', 
      founded: 1898,
      logo: 'https://media.api-sports.io/football/teams/133.png'
    },
    venue: { 
      id: 242, 
      name: 'São Januário', 
      city: 'Rio de Janeiro',
      image: 'https://media.api-sports.io/football/venues/242.png'
    }
  },
  { 
    team: { 
      id: 142, 
      name: 'Atlético Mineiro', 
      country: 'Brazil', 
      founded: 1908,
      logo: 'https://media.api-sports.io/football/teams/117.png'
    },
    venue: { 
      id: 243, 
      name: 'Mineirão', 
      city: 'Belo Horizonte',
      image: 'https://media.api-sports.io/football/venues/243.png'
    }
  },
  { 
    team: { 
      id: 143, 
      name: 'Bahia', 
      country: 'Brazil', 
      founded: 1931,
      logo: 'https://media.api-sports.io/football/teams/118.png'
    },
    venue: { 
      id: 244, 
      name: 'Fonte Nova', 
      city: 'Salvador',
      image: 'https://media.api-sports.io/football/venues/244.png'
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



