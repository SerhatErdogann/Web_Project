import React, { useState } from 'react'
import Datatable from 'react-data-table-component'
console.log('merhaba')
function App() {
  const columns =[
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true
    },
    {
      name: 'Name',
      selector: row => row.name
    },
    {
      name: 'Mail',
      selector: row => row.mail
    },
    {
      name: 'İletişim No',
      selector: row => row.iletisim,
      sortable:true
      
    },
    {
      name:'Yaş',
      selector: row=> row.age,
      sortable: true

    }
    

  ]
  const data=[
    {
       id: 1,
       name: 'Person1',
       mail: 'person1@gmail.com',
       iletisim: 5451232325,
       age: 54

    },
    {
       id: 2,
       name: 'Person2',
       mail: 'person2@gmail.com',
       iletisim: 5451684590,
       age:32

    },
    {
       id: 3,
       name: 'Person3',
       mail: 'person3@gmail.com',
       iletisim: 5374076321,
       age: 39

    },{
      id: 4,
      name: 'Person4',
      mail: 'person4@gmail.com',
      iletisim: 5451232325,
      age: 57

   },
   {
      id: 5,
      name: 'Person5',
      mail: 'person5@gmail.com',
      iletisim: 5463684590,
      age:38

   },
   {
      id: 6,
      name: 'Person6',
      mail: 'person6@gmail.com',
      iletisim: 5264076321,
      age: 31

   },{
    id: 7,
    name: 'Person7',
    mail: 'person7@gmail.com',
    iletisim: 5451232645,
    age: 58

 },
 {
    id: 8,
    name: 'Person8',
    mail: 'person8@gmail.com',
    iletisim: 5231684590,
    age:72

 },
 {
    id: 9,
    name: 'Person9',
    mail: 'person9@gmail.com',
    iletisim: 5890076321,
    age: 35

 },{
  id: 10,
  name: 'Person10',
  mail: 'person10@gmail.com',
  iletisim: 5446232325,
  age: 53

},
{
  id: 11,
  name: 'Person11',
  mail: 'person11@gmail.com',
  iletisim: 5234684590,
  age:37

}
    
  ]
  
  const [records,setRecords]=useState(data);
  function handleFilter(e){
      const newData= data.filter(row =>{
        return row.name.toLowerCase().includes(e.target.value.toLowerCase())
      })
      setRecords(newData)
  }
  return (
    <div>
      
      <h1 ><center> Tedarikçi Tablosu</center>
       <div className='text-search'><input type="text" onChange={handleFilter}></input></div>
      </h1>
      <Datatable 
      columns={columns}
      data={records}    
      selectableRows
      pagination
      ></Datatable>
    

     
    </div>
  );
}

export default App;
