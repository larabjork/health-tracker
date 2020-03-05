import React from 'react';
import './../About.css';
import { Container   }from 'react-bootstrap';

function About(){
  return (
    <div className="bodyDiv">
      <Container>
      <h1>" You should keep a symptom journal... "</h1>
      <p>You probably heard this from someone when you were first diagnosed with multiple sclerosis--or maybe even before a doctor officially delivered this news. I certainly read this more than once, and it's good advice.</p>
      <p>Now that I've lived with an MS diagnosis for almost 10 years, I've learned that a symptom journal isn't enough. I've come to see that there are at least three ways I think about my life with MS: </p>
      <ul>
        <li><strong>My medical history: </strong>The symptoms that led to my diagnosis, symptoms that my doctor continues to monitor, medications I've taken, MRIs and other tests I've had. I also call this my "official" MS story.</li>
        <li><strong>My version of the story: </strong>Aspects of my physical and mental health that my neurologist is less interested in or doesn't see as MS-related; strategies I've used for promoting my health. I call these my personal MS milestones.</li>
        <li><strong>My everyday life with MS: </strong>Sometimes I just need a place to unload about my experiences as a person with MS, without worrying about whether they meet the standard of an official talking point with my doctor. For this, I need a journal.</li>
      </ul>
    </Container>
    </div>
  );
}

export default About;
