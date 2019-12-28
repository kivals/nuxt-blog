<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="18" :ms="12" :lg="10">
      <AppPost
        v-for="post in 3"
        :key="post">

      </AppPost>
    </el-col>
  </el-row>
</template>

<script>
import AppPost from '@/components/main/Post'
export default {
  head: {
    title: 'Главная страница'
  },
  components: {
    AppPost
  }
}
</script>
