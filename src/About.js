const About = () => {
  const defaultIndent = '3.44418599285vw';

  return (  
    <div className="content">
      <h2 style={{paddingBottom: '1vw', paddingLeft: defaultIndent, paddingRight: defaultIndent}}>
        Words Matter
      </h2>
      <p style={{paddingBottom: '1vw', paddingLeft: defaultIndent, paddingRight: defaultIndent}}>
        Critics of the Prophet Joseph Smith who claim him the author of a 
        fictional book with imagined characters would find it difficult to 
        dispute what you are about to discover.
      </p>
      <p style={{paddingBottom: '1vw', paddingLeft: defaultIndent, paddingRight: defaultIndent}}>
        A through analysis of speech patterns and words used help prove 
        that each voice you hear in the Book of Mormon is unique. Each 
        with his or her own unique experiences, way of thinking, and way 
        of speaking.
      </p>
      <p style={{paddingLeft: defaultIndent, paddingRight: defaultIndent}}>
        Learn more about how our scholars and researchers were able to chart 
        every word spoken in the Book of Mormon.
      </p>
    </div>
  );
}
 
export default About;