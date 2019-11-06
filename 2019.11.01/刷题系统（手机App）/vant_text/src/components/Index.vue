<template>
  <div class="answer">
    <van-nav-bar title="选择题目分类" />

    <van-grid>
  <van-grid-item
    v-for="value in categoriesList"
    :key="value.id"
    :text="value.cat_name"
    @click="go(value.id,value.cat_name)"
  />
</van-grid>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categoriesList: []
    }
  },
  created () {
    this.getCategoriesList()
  },
  methods: {
    getCategoriesList () {
      this.$http.get('/categories').then(res => {
        if (res.data.ok === 1) {
          this.categoriesList = res.data.data
        }
      })
    },
    go (id, sort) {
      let username = sessionStorage.getItem('username')
      if (!username) {
        this.$router.push('/login')
      } else {
        this.$router.push(`/categories/${id}/questions/${sort}`)
      }
    }
  }
}
</script>
