import './pagina2.css';
import './index.css';
import video from './midia/tutorial.mp4';

const Tutorial = () => {
  const handleBackToGame = () => {
    window.history.back();
  };

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