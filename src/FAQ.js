import Collapsible from './Collapsible.js';

const FAQ = () => {
  function FAQ(header_text, body_text) {
    this.headerText = header_text;
    this.bodyText = body_text;
  }

  let FAQs = [
    new FAQ("What is the story behind Book of Mormon Voices?", "The Book of Mormon contains prophetic and historic teachings and records compiled by the ancient prophet Mormon. These records serve as another testament of Jesus Christ and his dealings among the peoples of the ancient Americas."),
    new FAQ("What technology was used to analyze language data?", "A deep learning language model was trained on the content of each author in the Book of Mormon to map similarities and differences of different authors. See the Network Diagram."),
    new FAQ("How can I use this data in my own scripture study?", "Each author in the Book of Mormon has a unique viewpoint on our Savior Jesus Christ aquired through their own conversion. We try to gather resources to help people learn and recognize the difference in language between authors to reflect the strengths of their testimony."),
    new FAQ("Can I request new topics for analysis?", "You may submit ideas through *insert method later*, we will consider all suggestion and appreciate the input to improve Book of Mormon Voices"),
    new FAQ("How can I access the data used in the analysis?", "We provide access to the data through our *insert api or method of accessing the data*")
  ];

  return ( 
    <> 
      <h2 className='main-text first-element-spacing' style={{marginBottom: '1vw'}}>FAQ</h2>
      {FAQs.map((expandable, index) => (
        <Collapsible header_text={expandable.headerText} body_text={expandable.bodyText}/>
      ))}
    </>
  );
}
 
export default FAQ;