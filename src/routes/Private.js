import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../firebaseConnection';
import { Navigate } from 'react-router-dom';


export default function Private({ children }) {

  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    async function checkLogin() {
      const unsub = onAuthStateChanged(auth, (user) => {
        if (user) {
          //Se tiver usuário logado
          const userData = {
            uid: user.uid,
            email: user.email,
          }

          // Salva no localstorage os dados de login do usuário
          localStorage.setItem("@detailUser", JSON.stringify(userData))
          setLoading(false);
          setSigned(true);
        } else {
          // Se não tiver usuário logado.
          setLoading(false);
          setSigned(false);
        }
      })
    }

    checkLogin();
  }, []);

  if (loading) {
    return (
      <div></div>
    )
  }

  if (!signed) {
    return (
      <Navigate to="/" />
    )
  }

  return children;
}