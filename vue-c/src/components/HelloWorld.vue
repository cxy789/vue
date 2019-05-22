<template>
	<div class="hello">
		内容:{{ input1 }}
			 {{ input2 }}
		<p style="text-indent: 0;">
			<a id='a' href="#middlePopover" class="mui-btn mui-btn-primary mui-btn-block mui-btn-outlined" style="padding: 5px 20px;">打开弹出菜单</a>
		</p>
		<div id="middlePopover" :class="middlePopover" class="mui-popover">
			<div class="mui-popover-arrow"></div>
			<div class="mui-scroll-wrapper">
				<div class="mui-scroll">
<!-- 下拉框 -->
					<select @click="changeList()">
						<option v-for="list in lists">
							{{ list }}
						</option>
					</select>
<!-- 下拉框无值时弹出框 -->
					<div id='bttn1' :style="bttn1Style">
						<p>输入值</p>
						<input type="text" class="inputList" v-model="inpVlau1">
						<input type="text" class="inputList" v-model="inpVlau2">
						<button @click="setList()">确定</button>
					</div>
<!-- 弹出框 -->
					<button id='dd' @click="isCxy = !isCxy">弹出框</button>
					<div v-if="isCxy" id="bttn2" :style="bttn2Style">
						<input type="text" v-model="input1">
						<input type="text" v-model="input2">
						<button @click="btn2()">按钮</button>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				lists: [],
				open: true,
				input1: '', // input1的值 双向绑定
				input2: '',
				inpVlau1: '', // inpValu1的值 双向绑定
				inpVlau2: '',
				bttn1Style: { // bttn1的style
				  display: 'none'
				},
				isCxy: false, // 弹出框是否显示
				middlePopover: '' // id 为 middlePopover样式
			}
		},
		methods: {
			/* 判断是否需要输值 */
			changeList() {
				if (this.open) {
				  // 动态改变bttn1 style的样式
					this.bttn1Style.display = 'block';
					this.open = false;
				}
			},
			/* 添加下拉框值 */
			setList() {
				this.lists.push(this.inpVlau1);
				this.lists.push(this.inpVlau2);
				this.bttn1Style.display = "none"
			},
			/* 传值  关闭弹出框 */
			btn2() {
				/* 消除mui蒙版 */
				let b = document.getElementsByClassName('mui-backdrop');
				b[0].style.height = '0';
				
				this.middlePopover = 'mui-popover';
				this.bttn2Style.display = "none"
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.mui-popover {
		height: 480px;
	}
	#bttn1{
		height: 200px;
		width: 200px;
		background-color: #bbbbbb;
		margin: 0 auto;
		padding: 5px;	
		}
	#bttn2 {
		height: 185px;
		width: 200px;
		background-color: #bbbbbb;
		margin: 0 auto;
		padding: 5px;
	}
</style>
