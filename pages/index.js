import Head from "next/head";
import Container from "../components/Container";
import fetch from 'isomorphic-fetch'
import Users from '../components/Users'

const Index = (props) => {
    console.log(props)
  return (
    <div>
      <Container>
        <Head>
          <title>Next.js Project - Home</title>
        </Head>
        <h1>Users</h1>
        <Users users={props.users} />
      </Container>
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
    const res = await fetch('https://reqres.in/api/users?page=2')
    const json = await res.json()
    console.log(json)
    return { users: json.data }
  }
  

export default Index;
