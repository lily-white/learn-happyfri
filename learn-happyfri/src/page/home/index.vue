<template>
	<div class="container">
		<header class="tool-tips">
			<span class="num-tips">{{level}}</span>
		</header>
		<div class="home-logo container-style"></div>
		<router-link to="item" class="start button"></router-link>
	</div>
</template>
<script>
	export default {
		name: 'home',
		computed: {
			level() {
				return this.$store.state.level;
			}
		},
		created() {
			this.$store.dispatch('initializeData');
		}
	}
</script>
<style>
	.home-logo {
		background-image: url("~@/images/1-2.png");
	}
	.num-tips {
		font-size: 28px;/*px*/
	}
	.start {
		background-image: url("~@/images/1-4.png");
	}
</style>
