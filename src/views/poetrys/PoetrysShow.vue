<script setup></script>

<template>
  <div>
    <!-- <h1>展示</h1> -->
    <div class="fenlei">
      <n-button color="#fff">诗集</n-button><n-button>歌曲</n-button>
    </div>

    <div class="bookmovies">
      <n-card title="《蒹葭》">
        <p>
          蒹葭苍苍，白露为霜。所谓伊人，在水一方。
          溯洄从之，道阻且长。溯游从之，宛在水中央。
          蒹葭萋萋，白露未晞。所谓伊人，在水之湄。
          溯洄从之，道阻且跻。溯游从之，宛在水中坻。
          蒹葭采采，白露未已。所谓伊人，在水之涘。
          溯洄从之，道阻且右。溯游从之，宛在水中沚。
        </p>
        <div class="button">
          <button>修改</button><button>删除</button>
        </div></n-card
      >
      <n-card title="《香水》">
        <p>
          《香水》（德语：Das
          Parfüm）是德国作家帕特里克·聚斯金德于1985年发表的长篇小说。
          《香水》叙述了一个奇才怪杰谋杀二十六个少女的故事。其每一次谋杀都是一个目的：只是因为迷上她们特有的味道。对格雷诺耶来说，每一次都是一场恋爱，但是他爱的不是人，而是她们身上的香味；谋杀她们只是为了要永远占有，并且拥有他所爱的那种没有感觉，没有生命的“香味”。
          [1]
        </p>
        <div class="button">
          <button>修改</button><button>删除</button>
        </div></n-card
      ><n-card title="天才在左疯子在右">
        <p>
          卡片内容 卡片内容 卡片内容 卡片内容 卡片内容 卡片内容 卡片内容
          卡片内容 卡片内容
        </p>
        <div class="button">
          <button>修改</button><button>删除</button>
        </div></n-card
      ><n-card title="天才在左疯子在右">
        <p>
          卡片内容 卡片内容 卡片内容 卡片内容 卡片内容 卡片内容 卡片内容
          卡片内容 卡片内容
        </p>
        <div class="button">
          <button>修改</button><button>删除</button>
        </div></n-card
      >
    </div>
  </div>
</template>

<style scoped>
.n-card {
  max-width: 300px;
  margin-left: calc(0.1em + 1vw);
  margin-top: 1em;
  position: relative;
}
::v-deep(.n-card-header) {
  padding: 1em 0.5em 0 0.8em;
}
.n-card p {
  margin-bottom: 1.8em;
}
.button {
  position: absolute;
  bottom: 0.8em;
  right: 1em;
}
button {
  margin-left: 0.5em;
}

.fenlei {
  /* color: orange; */
  margin: 0.5em 0.5em 0 0.5em;
  text-align: end;
}

.fenlei .n-button:first-child {
  margin-right: 0.5em;
}
.bookmovies {
  display: flex;
  flex-wrap: wrap;
}
</style>
