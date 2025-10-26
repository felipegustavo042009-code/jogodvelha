import './pagina2.css';
import './index.css';

const Tutorial = () => {
  const handleBackToGame = () => {
    window.history.back();
  };


  return (
    <div className="tutorial-container">
      
      <div className="video-square">
        <h1 className='body'> Jogo da Velha - Tutorial</h1>
        <video
          className="tutorial-video"
          controls
          controlsList="nodownload"
          preload="metadata"
        >
          <source src="/midia/tutorial.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
      <div className='voltarButton'>
        <button className="reiniciar voltar-btn" onClick={handleBackToGame}>
          ← Voltar
        </button>
      </div>
    </div>
  );
};

export default Tutorial;