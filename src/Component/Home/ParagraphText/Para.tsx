import Marquee from 'react-fast-marquee';
import './Para.scss';

export default function Para() {
  return (
    <div className='para'>
      <div className="container-fliud">
      <h1 className='main-text' style={{ zIndex: '999' }}>Avail quality approved Plastic Granules Making Machine, Plastic Granules Making Machine, Compounding Machine, Plastic Processing Machine, etc.</h1>
        <Marquee gradient={false} pauseOnHover={true} speed={50} className="static-marquee">
          <h1 className="text-3d">NANJING</h1>
        </Marquee>
      </div>
    </div>
  );
}

