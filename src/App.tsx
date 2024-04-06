import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/rafaellladm.png',
      name: 'Rafael Luz',
      role: 'Gerente de Finanças'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-03-11 22:57:00')
  },
  // {
  //   id: 2,
  //   author: {
  //     avatarUrl: 'https://github.com/lcostasilva.png',
  //     name: 'Leandro Costa',
  //     role: 'Web Developer'
  //   },
  //   content: [
  //     { type: 'paragraph', content: 'Fala galeraa 👋' },
  //     { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
  //     { type: 'link', content: 'jane.design/doctorcare'},
  //   ],
  //   publishedAt: new Date('2024-03-07 22:57:00')
  // },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/samuelluz.png',
      name: 'Samuel Luz',
      role: 'Computer Vision'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-03-09 22:57:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
