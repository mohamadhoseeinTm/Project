import { useEffect } from 'react';
import './NoPage.scss';
import { Link } from 'react-router-dom';
export default function NoPage() {
  useEffect(() => {
    const scene = document.getElementById('scene');
    const handleMouseMove = (e: MouseEvent) => {
      if (scene) {
        const x = e.pageX / 100;
        const y = e.pageY / 100;
        scene.style.left = `${x}px`;
        scene.style.top = `${y}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='NotPage'>
      <section className="wrapper">
        <div className="container">
          <div id="scene" className="scene" data-hover-only="false">
            <div className="circle" data-depth="1.2"></div>
            <div className="one" data-depth="0.9">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>
            <div className="two" data-depth="0.60">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>
            <div className="three" data-depth="0.40">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>
            <p className="p404" data-depth="0.50">404</p>
            <p className="p404" data-depth="0.10">404</p>
          </div>
          <div className="text">
            <article>
              <p>Uh oh! Looks like you got lost.<br />Go back to the homepage if you dare!</p>
              <Link to='/'>
                <button className='button'>i dare!</button>
              </Link>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
