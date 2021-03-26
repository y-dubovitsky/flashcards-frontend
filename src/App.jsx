import './App.css';

function App() {

  function hideSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      //TODO Добавить и к картинке transform!
    })
  }

  return (
    <>
      <div className="wrapper">
        <div className="content-container">
          <div className="sidebar" onClick={() => hideSideBar()}>
              <h1>Hello User</h1>
              <img src="http://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/280x178_2" alt="" srcset="" />
              <h3>Lorem, ipsum.</h3>
              <h3>Lorem, ipsum.</h3>
              <h3>Lorem, ipsum.</h3>
              <h3>Lorem, ipsum.</h3>
              <h3>Lorem, ipsum.</h3>
          </div>
          <div className="content">
            <div className="navbar">
              <a href="">Lorem, ipsum.</a>
              <a href="">Recusandae, delectus!</a>
              <a href="">Repellat, culpa.</a>
              <a href="">Voluptas, rerum!</a>
              <a href="">Veritatis, ducimus.</a>
            </div>
            <div className="card-container">
              <button className="nav-button"><i class="fas fa-arrow-left"></i></button>
              <div className="card-content">
                <h3 className="card-title">Lorem, ipsum.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, enim.</p>
                <div className="button-container">
                  <button>Left</button>
                  <button>Right</button>
                </div>
              </div>
              <button className="nav-button"><i class="fas fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
        <div className="footer">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, dicta, quibusdam fugit aliquid eligendi dolorem magnam voluptatum nam expedita obcaecati porro. Unde, esse rerum rem tenetur consectetur eos minima asperiores quam, itaque culpa molestias quibusdam sunt corporis, officia cum. Natus!
        </div>
      </div>
    </>
  );
}

export default App;
