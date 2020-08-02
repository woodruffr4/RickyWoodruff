import React, { Component } from 'react';

class Resume extends Component {

  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div className="sectionAttribute" key={education.school}>
        <img className="imageAttribute" src={education.logo}/>
        <div className="infoAttribute">
          <h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <ul>
            <li>{education.description}</li>
          </ul>
        </div>
        </div>
      })

      var work = this.props.data.work.map(function(work){

        const createBullets = (description) => {
          var bullets = description.map( (bullet, index) => <li key={index}>&#x25B8; {bullet}</li>)
          console.log(bullets)
          return (<ul>{bullets}</ul>);
        };

        return <div className="sectionAttribute" key={work.company}>
          <img className="imageAttribute" src={work.logo}/>
          <div className="infoAttribute">
            <h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            {createBullets(work.description)}
            </div>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="myhidden row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="myhidden row">

         <div className="three columns header-col">
            <h1><span>Internships</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      
   </section>
    );
  }
}

export default Resume;
