<script setup>
const post = await fetch('/api/post/1').then((r) => r.json());
</script>

<!-- 等价以下写法 -->

<script>
export default {
  async setup() {
    const post = await fetch(`/api/post/1`).then((r) => r.json());

    return { post };
  }
};
</script>
