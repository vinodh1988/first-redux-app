import React,{useState} from 'react'
import "./people.css"



  const Api =  ({people,storePerson})=>{
    
    
        let code =people.map(x=><tr key={x.sno}>
            <td>{x.sno}</td>
            <td>{x.name}</td>
            <td>{x.city}</td>
        </tr>)

           const [sno, setSno] = useState("");
           const [name, setName] = useState("");
           const [city, setCity] = useState("");
        return(
            <div> 
            <form>
                <table id="tabform">
                    <tbody>
                    <tr>
                        <td>sno</td>
                        <td><input type="text" value={sno} 
                        onChange={(e)=>{setSno(e.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" value={name} 
                         onChange={(e)=>{setName(e.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>city</td>
                        <td><input type="text" value={city} 
                         onChange={(e)=>{setCity(e.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td colSpan="2" align="center">
                    <input type="button" value="store" 
                    onClick={()=>{storePerson({sno:sno,name: name,city: city})}} />
                                
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
    
            <table id="report">
                      <thead>
                        <tr>
                         <th>Sno</th>
                         <th>name</th>
                         <th>city</th>
                         </tr>
                      </thead>
                      <tbody>
                          {code}
                      </tbody>
            </table>
            </div>
        
        )
    }

export default Api