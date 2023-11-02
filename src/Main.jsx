import style from './style.css';
import React from 'react';
import Image from './diagramma.drawio.png';

function Main() {
  return (
    <div>
    <article className='main'>
      <article className="row">
      <h1 style={{fontSize:'60px'}}>Klašu diagramma.(Class diagram)</h1>
      </article>
      <article className="row">
      <p>Toms Kārlis Ginters, Jevgēnijs Šuvalovs, Kristaps Ābelītis. </p>
      </article>

    </article>
        <article className='main1'>
          <h1>Kas ir klašu diagramma?</h1>
       
        <article style={{marginTop:'60px'}} className="row">
      <p>Programmatūras inženierijā klašu diagramma vienotajā modelēšanas valodā (UML) ir statiskas struktūras diagrammas veids, kas apraksta sistēmas struktūru, parādot sistēmas klases, to atribūtus, darbības (vai metodes) un attiecības starp objektiem. </p>
      </article>
      </article> 
      
        <article className='main2'>
          <h1>Kad to izmanto?</h1>
       
        <article style={{marginTop:'60px'}} className="row">
      <p>Klašu diagrammas izmanto lai attēlotu objektorientētās programmēšanas valodas klašu struktūru un attiecības starp klašu objektiem. Tās palīdz modelēt programmas struktūru, dokumentēt projektus, izstrādāt kodu, analizēt un plānot sistēmas uzvedību, un izglītības nolūkos. </p>
      </article>
      </article> 
      <article className='main3'>
          <h1>Kādi UML elementi ir šajā diagrammā?</h1>
       
        <article style={{marginTop:'60px'}} className="row">
      <p>Diagrammā klases ir attēlotas ar kastēm, kurās ir trīs nodalījumi:


 </p>
      </article>
      <article style={{marginTop:'60px'}} className="row">
      <p>

Augšējā nodalījumā ir klases nosaukums. Tas ir drukāts treknrakstā un centrēts, un pirmais burts ir rakstīts ar lielo burtu.
 </p>
      </article>
      <article style={{marginTop:'60px'}} className="row">
      <p>

      Vidējā nodalījumā ir klases atribūti. Tie ir līdzināti pa kreisi, un pirmais burts ir mazais.
 </p>
      </article>
      <article style={{marginTop:'60px'}} className="row">
      <p>

      Apakšējā nodalījumā ir operācijas, kuras klase var izpildīt. Tie ir arī līdzināti pa kreisi, un pirmais burts ir mazais.
 </p>
      </article>
      </article>
      <article className='main4'>
          <h1>Piemērs ar skaidrojumu.</h1>
       
        <article style={{marginTop:'60px'}} className="row">
        <img
  className="img1"
  src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/class-diagram-for-ATM-system-UML/Class-Diagram-ATM-system-750x660.png"
  alt="ATM System Class Diagram"
/>
      <p> </p>
      </article>
      </article> 
      <article className='main5'>
      <h1>Kā šī diagramma izskatās Bloga gadījumā?</h1>
        <article style={{marginTop:'60px'}} className="row">
          
          <img
                              style={{ height: '600px', width: '700px', margin: '10px' }}
                              src={Image}
                              alt="Sample Image"
                              className="img-style"
                            />
        
      </article>
      </article>
      <article className='main2'>
          <h1>Izveido</h1>
       
       
      </article>
      
      
        </div>
  );
}

export default Main;

