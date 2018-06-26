<template>
	<div>
		<div class="score-container">
			<header class="scores">
				<span class="score-num">{{score}}</span><span class="score-unit">分！</span>
			</header>
			<div class="result-tips">{{scoreTips}}</div>
		</div>
		<div class="share-button button" @click="showMask"></div>
		<p class="share-txt">关注葡萄之家，获取答案。</p>
		<div class="share-code">
		</div>
		<div class="mask" v-show="isShow">
			<img src="../../../static/5-2.png" class="share-img">
		</div>
	</div>
</template>
<script>
	import bgUrl from '@/images/4-1.jpg'
	import {mapState} from 'vuex'
	export default {
		name: 'score',
		data() {
			return {
				score: 0,
				scoreTips: '',
				isShow: false,
				rightAnswer: [2, 7, 12, 13, 18], //正确答案
            	scoreTipsArr:['你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，葡萄之家欢迎你！']
			}
		},
		computed: mapState(['answerid']),
		methods: {
			computeScore() {
				this.answerid.forEach((item, index) => {
				  if(item === this.rightAnswer[index]) {
				  	this.score += 20;
				  }
				})
			},
			getScoreTips() {
				if(this.score <= 20) {
	                this.scoreTips = this.scoreTipsArr[0];
	                return
	            }
	            if(this.score <= 40) {
	                this.scoreTips = this.scoreTipsArr[1];
	                return
	            }
	            if(this.score <= 60) {
	                this.scoreTips = this.scoreTipsArr[2];
	                return
	            }
	            if(this.score <= 80) {
	                this.scoreTips = this.scoreTipsArr[3];
	                return
	            }
	            if(this.score <= 100) {
	                this.scoreTips = this.scoreTipsArr[4];
	            }
			},
			showMask() {
				this.isShow = true;
			}
		},
		created() {
			this.computeScore();
			this.getScoreTips();
			document.body.style.backgroundImage = 'url(' + bgUrl + ')';
		}
	}
</script>
<style>
	.score-container {
		width: 455px;
		height: 427px;
		background-image: url(~@/images/4-2.png);
		background-repeat: no-repeat;
		margin: 60px auto 0;
		position: relative;
	}
	.scores {
		position: absolute;
		top: 180px;
		text-align: center;
		-webkit-text-stroke: 2px #412318;
		font-size: 66px;/*px*/
		width: 100%;
    	color: #a51d31;
    	font-weight: 700;
	}
	.scores .score-num {
		font-family: Tahoma,Helvetica,Arial;
	}
	.result-tips {
		color: #3e2415;
		font-size: 30px;
		width: 350px;
		text-align: center;
		position: absolute;
		top: 280px;
		left: 36px;
	}
	.share-button {
		background-image: url(~@/images/4-3.png);
		margin: 0 auto;
		display: block;
		margin-bottom: 60px;
	}
	.share-txt {
		color: #664718;
    	font-size: 20px;/*no*/
    	text-align: center;
    	margin: 0 auto;
	}
	.share-code {
		width: 212px;
		height: 212px;
		background-image: url(~@/images/4-4.png);
		background-origin: content-box;
		background-repeat: no-repeat;
		margin: 20px auto;
	}
	.mask {
		background-image: url(~@/images/5-1.png);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.share-img {
		width: 478px;
		height: 489px;
		position: absolute;
		right: 0;
	}
</style>
