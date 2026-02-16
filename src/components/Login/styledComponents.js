import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.$dark ? '#181818' : '#f9f9f9')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginCard = styled.div`
  width: 350px;
  padding: 32px;
  border-radius: 8px;
  background-color: ${props => (props.$dark ? '#0f0f0f' : '#ffffff')};
`

export const Logo = styled.img`
  width: 150px;
  display: block;
  margin: 0 auto 20px;
`

export const Label = styled.label`
  font-size: 12px;
  color: ${props => (props.$dark ? '#f8fafc' : '#1e293b')};
  display: block;
  margin-bottom: 6px;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  margin-bottom: 12px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;

  label {
    color: ${props => (props.$dark ? '#f8fafc' : '#1e293b')};
    font-size: 14px;
  }
`

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #4f46e5;
  color: #ffffff;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  color: #ff0000;
  font-size: 12px;
  margin-top: 8px;
`
