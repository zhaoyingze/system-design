<template>
    <div>
        <div style="height: 350px">
            <div id="grad" style="width: 57%; float: left; height:350px; padding-right: 6%;display: flex;align-items:Center;">
                <div class="showPage" style="min-height: 150px; width: 70%; position: absolute; right: 100px">
                    <p style="width: 100%"><span style="font-size: 33px; font-weight:100; color: #fff">跑腿互助</span> <span style="font-size: 20px; font-weight:100;  color: #fff">Errand</span></p>
                    <p style="font-size: 20px; color: #fff; width: 100%;margin-top: 20px; font-weight:100; ">互助互利，不费事不费力，不方便的时候为你解决小麻烦！</p>
                    <Button type="info" style="margin-top: 30px; font-size: 22px" @click="createFavor()">发布跑腿</Button>
                </div>
            </div>
            <div style="width: 43%; float: right; height:350px; background: #FF4B3C">
                <img src="./../../static/run/create.png" style="float: leftt; height: 300px; margin-top: 25px"></img>
            </div>
        </div>
        <div style="margin: 30px 13%;">
            <Col v-for="(e, index) in errandList" :key="index" span='8'>
            <run style="margin: 0 5%;margin-top:30px;" :data="e" @click.native="getDetail(e)"></run>
            </Col>
        </div>
        <FavorDetail :showDetail="detailModel" @refresh="refresh"></FavorDetail>
    </div>
</template>
<script>
import run from './components/Run.vue'
import FavorDetail from './components/RunDetail.vue'
import { mapState } from 'vuex'
import { Favor } from '../store/runFavor/index.js'

export default {
    inject: ['reload'],
    components: {
        run,
        FavorDetail
    },
    methods: {
        createFavor() {
            let info = JSON.parse(window.sessionStorage.getItem('LogInfo'))
            if (info.log)
                this.$router.push({ name: 'createFavor' })
            else
                this.$Message.warning('您还未登录，请先登录后发布跑腿。')
        },
        getDetail(data) {
            this.$store.commit('Favor/SET_DETAIL', data)
            this.detailModel = !this.detailModel
        },
        refresh: function(data) {
            if (data) {
                this.reload()
            }
        }
    },
    data() {
        return {
            detailModel: false,
            index: 0
        }
    },
    computed: mapState('Favor', {
        errandList: 'errandList'
    }),
    mounted() {
        this.$store.dispatch('Favor/GET_ERRANDLIST')
    }
}
</script>
<style scoped>
#grad {
    background: linear-gradient(to right, #FF6699, #FF4B3C);
}

.showPage {
    .ivu-btn-info {
        color: #fff;
        background-color: rgba(255, 255, 255, 0) !important;
        border-color: #fff !important;
    }

    .ivu-btn-info span {
        font-size: 24px !important;
    }

    .ivu-btn-info:hover {
        color: #FF6699 !important;
        background-color: #FF6699;
        border-color: #FF6699 !important;
    }

    .ivu-btn {
        border-radius: 30px !important;
        background: rgba(255, 255, 255, 0) !important;
        width: 180px;
        height: 50px;
    }

    .ivu-btn:hover {
        border-radius: 30px !important;
        background: #fff !important;
    }
}
</style>