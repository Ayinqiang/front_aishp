<template>
  <div>
    <v-list dark
            nav
            dense>
      <v-list height="120px"
              style="padding-top:20px">
        <v-subheader>PEPORTS</v-subheader>
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-avatar size="50">
              <img src="https://wx3.sinaimg.cn/mw690/006TJ7vfgy1gnv4u8tv7oj31iz21anhx.jpg" />
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>阿银强</v-list-item-title>
            <v-list-item-subtitle>今日事今日毕</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <!-- 系统管理 -->
      <v-list>
        <v-subheader>DashBroad</v-subheader>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>
              系统管理
            </v-list-item-title>
          </template>
          <v-list-item-group>
            <v-list-item style="text-decoration: none;"
                         v-for="(item, index) in dashBorad"
                         :key="index"
                         @click="pushTo(item.id)">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list-group>
      </v-list>
    </v-list>
  </div>
</template>

<script>
import { getNavList } from "./leftList-Server"
export default {
  data() {
    return {
      dashBorad: [
        {
          id: 0,
          icon: "mdi-wifi",
          text: "数据管理"
        }
      ],
      market: [
        {
          id: 4,
          icon: "mdi-wifi",
          text: "商品"
        },
        {
          id: 5,
          icon: "mdi-wifi",
          text: "购物车"
        }
      ],
      items: [
        {
          id: 1,
          icon: "mdi-wifi",
          text: "用户管理"
        },
        {
          id: 2,
          icon: "mdi-account",
          text: "订单管理"
        },
        {
          id: 3,
          icon: "mdi-chart-donut",
          text: "商品管理"
        }
      ],

      model: 1
    };
  },
  methods: {
    pushTo(item) {
      if (item == 0) {
        this.$router.push("/index/dashBorad")
      }
      else if (item == 1) this.$router.push("/index/userList");
      else if (item == 2) this.$router.push("/index/orderList");
      else if (item == 3) {
        this.$router.push("/index/CommodityList");
      } else if (item == 4) {
        this.$router.push("/index/market");
      } else if (item == 5) {
        this.$router.push("/index/shopCar");
      }
    }
  },
  created: {
    getNavListAuto() {
      getNavList().then(res => {
        console.log(res.data)
      })
    }
  }
};
</script>

<style></style>
