<template>
  <v-app>
    <v-app-bar app
               clipped-left
               style="background-color:#ffffff">
      <v-app-bar-nav-icon @click="trun"> </v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-img :src="logo"
               height="60px"
               width="200px"></v-img>
      </v-toolbar-title>
      <v-text-field label="搜索"
                    style="margin-top:20px;max-width:300px;"
                    prepend-icon="mdi-bell"></v-text-field>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-menu open-on-hover
              offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-avatar v-bind="attrs"
                    v-on="on"
                    size="40">
            <img src="https://wx3.sinaimg.cn/mw690/006TJ7vfgy1gnv4u8tv7oj31iz21anhx.jpg" />
          </v-avatar>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items"
                       :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    //左侧抽屉
    <v-navigation-drawer app
                         mini-variant-width="80px"
                         :expand-on-hover="expandOnHover"
                         :mini-variant="miniVariant"
                         clipped
                         fixed
                         dark>
      <left-list></left-list>
    </v-navigation-drawer>
    <v-main>
      <v-container class="pr-12">
        <transition hide-on-leave
                    :name="SkipSwitchName">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LeftList from "../../components/Bar/LeftList"
export default {
  name: "AiShop",
  components: { LeftList },
  data() {
    return {
      SkipSwitchName: "",
      mini: false,
      expandOnHover: true,
      miniVariant: true,
      showSystemBar: false,
      items: [
        { title: "退出登录" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" }
      ],
      logo: require("../../assets/SellHome/mylogo.png")
    };
  },
  methods: {
    trun() {
      this.mini = !this.mini;
      this.expandOnHover = !this.expandOnHover;
      this.miniVariant = !this.miniVariant;
    }
  },
  watch: {
    $route(to, from) {
      if (to.meta.id > from.meta.id) {
        this.SkipSwitchName = "slide-left";
      } else {
        this.SkipSwitchName = "slide-right";
      }
    }
  }
}
</script>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: fixed;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}
</style>