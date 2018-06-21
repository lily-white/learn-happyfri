<template>
	<div class="container">
		<header class="tool-tips">
			<span class="num-tips">第{{itemNum}}题</span>
		</header>
		<div class="item-logo container-style">
			<div class="item-list-container">
				<h6 class="item-title">{{itemDetail[itemNum-1].topic_name}}</h6>
				<ul>
					<li class="item" 
						v-for="(answer, index) in itemDetail[itemNum-1].topic_answer">
						<span class="option-style" >{{chooseType(index)}}</span>
						<span class="option-detail">{{answer.answer_name}}</span>
					</li>
				</ul>
			</div>
		</div>

		<router-link to="item" class="next button"></router-link>
	</div>
</template>
<script>
	import {mapState} from 'vuex' 
	export default {
		name: 'item',
		data() {
			return {
				itemId: null,
				choosedId: null,
				choosedNum: null
			}
		},
		computed: mapState([
			'itemNum',
			'itemDetail'
		]),
		methods: {
			chooseType(type) {
				switch(type) {
					case 0: return 'A';
					case 1: return 'B';
					case 2: return 'C';
					case 3: return 'D';
				}
			}
		}
	}
</script>
<style>
	.item-logo {
		background-image: url("~@/images/2-1.png");
	}
	.num-tips {
		font-size: 28px;/*px*/
	}
	.next {
		background-image: url("~@/images/2-2.png");
	}
	.item-list-container {
		width: 375px;
		height: 328px;
		position: absolute;
		top: 112px;
		left: 140px;
		color: #fff;
		text-align: left;
	}
	.item-title {
		font-size: 30px;/*px*/
		margin: 0 auto;
	}
	.item {
		margin-top: 18px;
	}
	.option-style {
		margin-right: 14px;
		width: 32px;
		height: 32px;
		text-align: center;
		display: inline-block;
		border: 1px/*no*/ solid #fff;
		border-radius: 50%;
	}
	.option-style.is-choosed {
		background-color: #ffd400;
	    color: #575757;
	    border-color: #ffd400;
	}
</style>
