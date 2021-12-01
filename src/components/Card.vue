<template>
  <div class="w-full">
    <h2 class="text-6xl font-bold text-left pl-6 mb-16">Card Component</h2>
    <div class="w-full flex flex-col items-center">
      <div class="card" v-for="card in cards" :key="'card' + card.id">
        <!-- left side -->
        <img src="../assets/images/card/drawers.jpg" alt class="card-img" />
        <!-- right side -->
        <div class="card-description">
          <h1 class="card-description-title">{{ card.title }}</h1>
          <p class="card-description-text">{{ card.description }}</p>
          <!-- author box -->
          <div class="card-description-author">
            <div class="card-description-author-details-container">
              <img src="../assets/images/card/avatar-michelle.jpg" alt />
              <div class="card-description-author-details">
                <p class="card-description-author-details-name">{{ card.authorName }}</p>
                <p class="card-description-author-details-date">{{ card.date }}</p>
              </div>
            </div>
            <!-- share button -->
            <div
              class="card-description-author-share-button"
              v-bind:class="[
                shareOverlay === true
                  ? 'card-description-author-share-button--active'
                  : '',
              ]"
              @click="showOverlay"
            >
              <!-- Share container -->
              <div class="share-container" v-if="shareOverlay">
                <p class="share-container-text">SHARE</p>
                <img src="../assets/images/card/icon-facebook.svg" alt class="share-container-img" />
                <img src="../assets/images/card/icon-twitter.svg" alt class="share-container-img" />
                <img src="../assets/images/card/icon-pinterest.svg" alt class="share-container-img" />
              </div>
              <img src="../assets/images/card/icon-share.svg" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgageProfile from '../assets/images/card/avatar-michelle.jpg';
import imageCard from '../assets/images/card/drawers.jpg';

export default {
  name: "Card",
  data: function () {
    return {
      cards: [
        {
          id: 1,
          imageCard: imageCard,
          title: "Shift the overall look and feel by adding these wonderful touches to furniture in your home ",
          description: "Ever been in a room and felt like something was missing ? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.",
          imageProfile: imgageProfile,
          authorName: 'Junior Apleton',
          date: '28 jun 2020',
        },
        {
          id: 1,
          imageCard: imageCard,
          title: "Bonjour je m'apelle alexis ",
          description: "Ever been in a room and felt like something was missing ? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.",
          imageProfile: imgageProfile,
          authorName: 'Alexis Apleton',
          date: '28 jun 2021',
        },
        // {
        //   id: 1,
        //   imageCard: imageCard,
        //   title: "Hey alexis comment ça va",
        //   description: "Ever been in a room and felt like something was missing ? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.",
        //   imageProfile: imgageProfile,
        //   authorName: 'Kevin Apleton',
        //   date: '28 jun 2022',
        // },
      ],
      shareOverlay: false,
    };
  },
  methods: {
    showOverlay: function () {
      this.shareOverlay = !this.shareOverlay;
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  width: 768px;
  height: 250px;
  border-radius: 12px;
  margin: 1rem 0;
}

.card-img {
  width: 40%;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.card-description {
  width: 60%;
  padding: 1rem 3rem;
  background-color: white;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
}

.card-description-title {
  font-family: sans-serif;
  font-size: 1.25rem;
  color: #4b5366;
  text-align: left;
}

.card-description-text {
  color: #777f8c;
  font-size: 0.8rem;
  text-align: justify;
}

.card-description-author {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}
.card-description-author-details-container {
  display: flex;
  align-items: center;
}
.card-description-author-details-container > img {
  width: 32px;
  height: 32px;
  border-radius: 99999px;
}

.card-description-author-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 1rem;
}

.card-description-author-details-name {
  color: #777f8c;
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0.3rem;
}

.card-description-author-details-date {
  color: #b5b8bd;
  font-size: 0.8rem;
  margin: 0;
}

.card-description-author-share-button {
  background-color: #edf2f8;
  border-radius: 9999px;
  padding: 10px 12px;
}

.card-description-author-share-button--active {
  background-color: #6c7a97;
}

.share-container {
  background-color: #49556d;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  border-radius: 12px;
  transform: translateX(-50%) translateY(-80px);
}

.share-container > * {
  margin: 10px;
}

.share-container::after {
  content: "▶";
  display: block;
  margin: 0 auto;
  position: absolute;
  font-size: 2rem;
  transform: rotateZ(-30deg) translateY(20px) translateX(-5%);
  color: #49556d;
}

.share-container-text {
  color: #fffeff;
  font-size: 0.8rem;
  letter-spacing: 2px;
}
.share-container-img {
  width: 18px;
  height: 18px;
}

@media screen and (max-width: 800px) {
  .card {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 320px;
    border-radius: 12px;
  }

  .card-img {
    width: 100%;
    border-radius: 0;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .card-description {
    border-radius: 0;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    width: 100%;
    padding: 0.5rem 0;
  }

  .card-description-title,
  .card-description-text,
  .card-description-author {
    padding: 0 0.5rem;
  }
}
</style>