<template>
  <div class="darkmode-switch" :class="{'active': isDarkmode}" @click="toggleDarkmode">
    <input type="checkbox" id="switch" ref="switch" :checked="!isDarkmode">
    <span class="sun" :class="{'active': !isDarkmode}"/>
    <span class="cloudy" :class="{'active': !isDarkmode}"/>
    <span class="moon" :class="{'active': isDarkmode}"/>
    <div class="stars" :class="{'active': isDarkmode}">
      <span class="star--1"></span>
      <span class="star--2"></span>
      <span class="star--3"></span>
      <span class="star--4"></span>
      <span class="star--5"></span>
      <span class="star--6"></span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isDarkmode: false,
  }),
  mounted () {
    const darkmode = localStorage.getItem('darkmode')
    this.isDarkmode = darkmode === 'true'
    
    const bodyClasses = document.body.classList

    if (darkmode === 'true') {
      bodyClasses.add('theme-dark')
      document.documentElement.className = "theme-dark"
    } else {
      bodyClasses.remove('theme-dark')
      document.documentElement.className = ""
    }

    this.$nextTick(function () {
      this.$refs.switch.checked = this.isDarkmode
    })
  },
  methods: {
    toggleDarkmode () {
      this.isDarkmode = !this.isDarkmode
      
      const bodyClasses = document.body.classList
      if (this.isDarkmode) {
        bodyClasses.add('theme-dark')
        document.documentElement.className = "theme-dark"
      } else {
        bodyClasses.remove('theme-dark')
        document.documentElement.className = ""
      }
      localStorage.setItem('darkmode', String(this.isDarkmode))
    }
  }
}
</script>

<style lang="stylus" scoped>

input[type=checkbox]
  display: none

.darkmode-switch
  position: relative
  border: 1px solid 
  border-radius: 6px
  height: 20px
  padding: 2px
  display: flex
  cursor: pointer
  background-color: #aed5ff
  &.active
    background-color: transparent
  & .sun, .moon 
    opacity: 0
    position: relative
    top: 0px
    border-radius: 50%
    transition: 0.5s
    width: 20px
    height: 20px

.sun
  left: 20px
  background: #fcd462
  box-shadow: inset -4px -2px 0px 0px #f6c458
  &.active
    opacity: 1
    left: 0px

.moon
  left: -20px
  background-color: transparent
  box-shadow: inset -4px -2px 0px 0px #fff
  &.active
    opacity: 1
    left: 0px

.cloudy 
  opacity: 0
  top: -20px
  left: 12px
  position: absolute
  width: 20px
  height: 20px*.35
  border-radius: 20px*.33
  margin: 20px*.55 auto 20px
  background:#f2f9ff
  background: 
    linear-gradient(top, #f2f9ff 65%, #b6cdd8 100%)
  
  box-shadow: 4px 20px 20px 0px rgba(0, 0, 0, 0.4)

  transition: 0.5s
  transition-delay: 0s

  &.active 
    opacity: 1
    top: 2px
    transition-delay: 0.5s
  
  &:before,
  &:after 
    content: ''
    position: absolute
    background: #f2f9ff
  
  &:after 
    width: 20px*.33
    height: 20px*.33
    top: -20px*.15
    left: 20px*.15
    border-radius: 20px*.33
  
  &:before 
    width: 20px*.5
    height: 20px*.5
    top: -20px*.25
    right: 20px*.13
    border-radius: 20px*.66

.stars
  opacity: 0
  top: 2px
  left: 12px
  position: absolute

  transition: 0.5s
  transition-delay: 0s

  &.active 
    opacity: 1
    transition-delay: 1s
    transition-delay: 0.25s

.stars span 
  position: absolute
  background-color: #ffffff
  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95)
  border-radius: 50%

.star--1 
  top: 5px
  left: 5px
  width: 2px
  height: 2px

.star--2
  top: 15px
  left: 1px
  width: 3px
  height: 3px

.star--3
  top: 1px
  left: 3px
  width: 1px
  height: 1px

.star--4
  top: 7px
  left: -6px
  width: 1px
  height: 1px

.star--5
  top: 8px
  left: -2px
  width: 2px
  height: 2px

.star--6
  top: 12px
  left: 5px
  width: 1px
  height: 1px
</style>