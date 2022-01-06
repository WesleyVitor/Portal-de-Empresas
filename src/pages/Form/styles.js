import styled from 'styled-components';

export const StyleForm = styled.form`
    margin-left:178px;
    margin-top:101px;
    margin-right:126px;

    & input{
        margin-left:10px;
        border:none;
        box-shadow:0px 1px 0px #9E9E9E;
        font-size:16px;
        font-family:"Roboto", sans-serif;
        line-height:18px;
    
        color:#9E9E9E;
    }

    & fieldset{
        border:none;
        box-shadow:0px 4px 4px rgba(0,0,0,.26);
        padding-left:12px;
    }

    & .person-fieldset{
        margin-bottom: 10px;
        text-align:center;
        padding-top:30px;

        & div{
            margin-bottom:40px;
        }  

        & #opening{
            display:inline-flex;
            flex-direction:column;
        }
    }

    & .andress-fieldset{
        padding-top:31px;
        text-align:center;

        & legend{
            font-size:20px;
            font-family:"Roboto", sans-serif;
            line-height:18px;
        }

        & div{
            margin-bottom:36px;
        }
    }

    & input[type=submit]{
        margin-bottom:17px;
        margin-right:17px;
        border-radius:4px;
        background:#2E2E3A;
        border:none;
        color:#FFF;
        font-family:"Roboto", sans-serif;
        font-size:14px;
        box-shadow:0 0 0 #FFF;
    }
    
`
