import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import randomPic from '../assets/Subject.png'

export const Banner = () => {
  const [ loopNumber, setLoopNumber ] = useState(0);
  const [ isDeleting, setIsDeleting ] = useState(false);
  const toRotate = [ "Web Developer", "Full-Stack Developer" ];
  const [ text, setText ] = useState('');
  const [ delta, setDelta ] = useState(300 - Math.random() * 100);
  const period = 2500; 

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta )

    return () => { clearInterval(ticker) };
  }, [text] );

  const tick = () => {
    let i = loopNumber % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1 ) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if(isDeleting){
      setDelta(previousDelta => previousDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNumber(loopNumber + 1);
      setDelta(200);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Nice to meet you, welcome to my portfolio.</span>
            <h1>{`Hi I'm Branning, I'm a `}<span className="text-rotate wrap">{text}</span></h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img className="pic" src={randomPic} alt="Header image" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}