<template>
  <div class="login">
        <vue-particles class="particles"
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="100"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
      <LoginForm></LoginForm>
  </div>
    
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
export default {
    components: { LoginForm }
}
</script>

<style>
.particles{
  width: 90%;
  height: 100%;
  margin-left: 5%;
}
.login{
  position: relative;
}
</style>