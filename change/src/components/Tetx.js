import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';
const Text = () => {
   
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

    const Select= styled.select`
    
    color: black;

    
    `
    
    const Option= styled.option`
    
    color: blue;
    :hover{
        color: brown;
    }
    
    `


    return(
        <div>
            <Select onChange={onChange}>
                {category.map((cate, index) =>
                    <Option key={index} value={cate}>{cate}
                    
                    </Option>
                )}
            </Select>
            {come === true ? 
                <form  onSubmit={(e)=>{
                    e.preventDefault();
                   navigate('/');
                    
                }}>
                    <textarea placeholder='당신의 걱정을 입력하세요'></textarea>
                    <input type='submit' value='제출'/>
                </form>
            : null}

           <button><Link to='/'>Home</Link></button> 
            

        </div>
    );
};

export default Text;
