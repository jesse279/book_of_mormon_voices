import Collapsible from './Collapsible.js';

const FAQ = () => {
  return (  
    <div className="content">
      <h2>FAQ</h2>
      <div className="content">
        <div className="faq">
          <Collapsible header_text="What is the story behind Book of Mormon Voices?" body_text="The Book of Mormon contains a collection of stories and testimonies and stories from many different authors in ancient America over the course of hundreds of years"/>
        </div>

        <div className="faq">
          <Collapsible header_text="What technology was used to analyze language data?" body_text="A deep learning language model was trained on the content of each author in the Book of Mormon to map similarities and differences of different authors in the Book of Mormon. See the Network Diagram."/>
          

        </div>
        
        <div className="faq">
          <Collapsible header_text="How can I use this data in my own study?" body_text="Each author in the Book of Mormon has a unique viewpoint on our Savior Jesus Christ aquired through their own conversion. We try to gather resources to help people learn and recognize the difference in language between authors to reflect the strengths of their testimony."/>
        </div>

        <div className="faq">
          <Collapsible header_text="Can I request new topics for analysis?" body_text="You may submit ideas through *insert method later*, we will consider all suggestion and appreciate the input to improve Book of Mormon Voices"/>
        </div>


        <div className="faq">
          <Collapsible header_text="How can I access the data used in the analysis?" body_text="Get Good"/>
        </div>
      </div>
    </div>
  );
}
 
export default FAQ;