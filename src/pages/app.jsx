import AddTask from '../molecules/add.task';
import Header from '../molecules/header';
import Layout from '../templates/Layout';

function App() {

  return (
    <Layout>
      <Header></Header>
      <AddTask></AddTask>
    </Layout>
    
  );
}

export default App;
