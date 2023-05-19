import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';
const Text = () => {

    const Div= styled.div`

    margin: 0px auto;
    
    `
   
    const [come, setcome] = useState(false);
    const category = ['선택','결혼','연애' ,'취업', '성적', '돈'];
    const navigate= useNavigate();

    const onChange = (e) => {
        const selectedbox= e.target.value;
        if (selectedbox === '선택' ){
            setcome(false);
        } else{
            setcome(true);
        }

        
    }

    const Form= styled.div`
    
    margin-left: 800px;
    margin-top: 50px;
    `

    const Select= styled.select`
    
    color: black;

    
    `
    
    const Option= styled.option`
    
    color: blue;
    :hover{
        background-color: red;
    }
    
    `

     const Processbar= styled.div`
     display: flex;
     margin-left: 800px;
     margin-top: 100px;
     align-items: center;



     width: 100%;
     height: 24px;
    
     `
    const Circle1 = styled.div`
  
     width: 24px;
height: 24px;
     background: #FD3C2D;
/* black */
border-radius: 50%;
border: 2px solid #222222;
     `



    const Line1 = styled.div`
       
     border: 2px solid #222222;
     width: 149px;
    height: 0px;
     `
    const Circle2 = styled.div`
          
          width: 24px;
     height: 24px;
          background: #FD3C2D;
     /* black */
     border-radius: 50%;
     border: 2px solid #222222;
          `
    const Line2 = styled.div`
                
               border: 2px solid #222222;
               width: 149px;
          height: 0px;
               `
    const Circle3 = styled.div`
            border-radius: 50%;
               width: 24px;
          height: 24px;
               background: #FD3C2D;
          /* black */
          
          border: 2px solid #222222;
               `


    return(
        <Div>
            <Processbar>
                <Circle1/>
            <Line1/>
            <Circle2/>
            <Line2/>
            <Circle3/>
                 </Processbar>


            <Form>
            <Select onChange={onChange}>
                {category.map((cate, index) =>
                    <Option key={index} value={cate}>{cate}
                    
                    </Option>
                )}
            </Select>
            {come === true ? 
                <form  onSubmit={(e)=>{
                    e.preventDefault();
                   navigate('/Eat');
                    
                }}>
                    <textarea placeholder='당신의 걱정을 입력하세요'></textarea>
                    <input type='submit' value='제출'/>
                </form>
            : null}

           <button><Link to='/'>Home</Link></button> 
           
           </Form>
           
          
        </Div>
      
    );
};

export default Text;
