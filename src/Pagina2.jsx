import './pagina2.css';
import './index.css';

const Tutorial = () => {
  const handleBackToGame = () => {
    window.history.back();
  };

  const video = "https://drive.google.com/file/d/1-ZplpsSYPiSjqCjt-21sUr4ZSax4tczc/preview"

  return (
    <div className="tutorial-container">
        <button className="reiniciar voltar-btn" onClick={handleBackToGame}>
          ← Voltar
        </button>
      <div className="video-square">

        <h1 className='body'> Jogo da Velha - Tutorial</h1>
      

        {/* VÍDEO DO YOUTUBE SHORTS */}
        <iframe
          width="100%"
          height="100%"
          src={video}
          title="Tutorial Jogo da Velha"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

          
      </div>
    </div>
  );
};

export default Tutorial;