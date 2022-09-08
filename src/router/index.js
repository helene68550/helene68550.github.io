import { createRouter, createWebHistory } from 'vue-router'
import NotesView from '../views/NotesView.vue'
import NoteView from '../views/NoteView.vue'
import UpdateNoteView from '../views/UpdateNoteView.vue'
import PostitsView from '../views/PostitsView.vue'
import PostitView from '../views/PostitView.vue'
import UpdatePostitView from '../views/UpdatePostitView.vue'
import CreatedPostitView from '../views/CreatedPostitView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'notes',
      component: NotesView
    },
    {
      path: '/note/:postit/:title/:content', name: 'note',component: NoteView
    
    },
    {
      path: '/updatenote/:note/:title/:content', name: 'updatenote',component: UpdateNoteView
    },
    {
      path: '/postit/:postit/title/:title/content/:content', name: 'postit', component: PostitView},

    {
        path: '/updatepostit/:postit/title/:title/content/:content', name: 'updatepostit', component: UpdatePostitView},
    
   
    {
      path: '/postits',
      name: 'postits',
      component: PostitsView
    },
    {
      path: '/createdpostit',
      name: 'createdpostit',
      component: CreatedPostitView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
