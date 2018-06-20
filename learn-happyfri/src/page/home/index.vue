<template>
	<div class="home-container">
		<header class="tool-tips">
			<span class="num-tips">{{level}}</span>
		</header>
		<div class="home-logo"></div>
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
		}
	}
</script>
<style>
	.home-container {
		text-align: center;
		padding-top: 192px;
	}
	.home-logo {
		background-image: url("~@/images/1-2.png");
		background-size: 100%;
		width: 616px;
		height: 544px;
		margin: 0 auto;
	}
	.num-tips {
		font-size: 28px;/*px*/
	}
	.start {
		background-image: url("~@/images/1-4.png");
	}
</style>
