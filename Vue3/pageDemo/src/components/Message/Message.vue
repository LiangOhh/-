<template>
    <div>
        <el-button plain @click="dialogVisible = true">
            Click to open the Dialog
        </el-button>
        <el-dialog v-model="dialogVisible" title="通知" width="300">
            <span>确认清空购物车吗</span>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="dialogVisible = false">
                        Confirm
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
const dialogVisible = ref(false)
const props = defineProps(['dialogVisible'])
</script>

<style lang="scss" scoped></style>