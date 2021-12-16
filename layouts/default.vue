<template>
  <v-app>
    <!-- Sidebar -->
    <v-navigation-drawer
      v-model="drawer"
      src="https://picsum.photos/1920/1080?random"
      app
    >
      <template v-slot:img="img">
        <v-img
          v-bind="img"
          gradient="to bottom right, rgba(0, 57, 115,.5), rgba(229, 229, 190,.8)"
        ></v-img>
      </template>

      <v-list nav>
        <v-list-group
          v-for="(item, i) in items"
          :key="i"
          color="grey lighten-3"
        >
          <template v-slot:activator>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.items"
            :key="child.title"
            :to="child.to"
            color="grey lighten-3"
            router
            nuxt
            exact
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Navbar -->
    <v-app-bar
      src="https://picsum.photos/1920/1080?random"
      prominent
      shrink-on-scroll
      fade-img-on-scroll
      app
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to bottom right, rgba(11,17,39,.5), rgba(97,80,85,.8)"
        />
      </template>

      <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer" />

      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon color="white">mdi-minus</v-icon>
      </v-btn>

      <v-toolbar-title>
        <nuxt-link class="white--text text-decoration-none" to="/">
          {{ title }}</nuxt-link
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu rounded transition="scroll-y-reverse-transition" offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on" class="mx-4">
            <v-avatar color="grey darken-1" size="48">
              <img src="https://picsum.photos/1920/1080?random" alt="User" />
            </v-avatar>
          </v-btn>
        </template>

        <v-card width="145">
          <v-list class="text-center" nav>
            <v-list-item-title class="text-h6">
              John Doe
            </v-list-item-title>
            
            <v-list-item-subtitle class="text-caption">
              john.doe@doe.com
            </v-list-item-subtitle>
            <v-divider class="mt-3" />

            <v-list-item-content>
              <div class="d-flex justify-center">
                <v-switch
                  inset
                  v-model="$vuetify.theme.dark"
                  :label="$vuetify.theme.dark ? 'Dark' : 'Light'"
                />
              </div>
              <v-divider class="mb-3" />

              <v-btn depressed rounded text> Editar </v-btn>
              <v-divider class="my-3" />

              <v-btn depressed rounded text> Sair </v-btn>
            </v-list-item-content>
          </v-list>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: "Nuxtfy",
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-desktop-mac",
          title: "Sistema",
          items: [{ title: "Usuários", to: "/users" }],
        },
        {
          icon: "mdi-shopping",
          title: "Comercial",
          items: [
            { title: "Clientes", to: "/customers" },
            { title: "Produtos", to: "/products" },
          ],
        },
      ],
    };
  },
};
</script>
