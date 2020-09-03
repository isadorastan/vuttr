<template>
    <div class="tools-delete">
        <Loading :show="loading" />
        <Modal :show="show" @on-modal-close="onCloseModal">
            <h5>Remove tool</h5>
            <p>Are you sure you want to remove tools?</p>

            <div class="action-buttons">
                <Button cta="Cancel" @click="onCloseModal" className="secondary"/>
                <Button cta="Yes, remove" @click="deleteTool" />
            </div>
        </Modal>
    </div>
</template>

<script>
import Loading from '../components/Loading';
import Modal from '../components/Modal';
import Button from '../components/Button';
import axios from 'axios';

export default {
    name: 'ToolsDeletion',
    components: {
        Modal,
        Button,
        Loading
    },
    data: () => {
        return {
            show: false,
            id: '',
            loading: false
        };
    },
    methods: {
        onCloseModal() {
            this.show = false;
        },
        openDeleteModal(id) {
            this.show = true;
            this.id = id;
        },
        deleteTool() {
            this.loading = true;
            axios
                .delete(`http://localhost:3000/tools/${this.id}`)
                .then(() => {
                    setTimeout(() => {
                        this.onCloseModal();
                        this.$emit('on-tool-deleted');
                        this.loading = false;
                    }, 2000);
                })
                .catch(error => {
                    console.error('Error deleting tool', error);
                    this.loading = false;
                });
        }
    }
};
</script>

<style lang="less" scoped>
.tools-delete {
    h5 {
        margin-bottom: 15px;
    }

    .action-buttons {
        display: flex;
        justify-content: flex-end;
        margin: 25px 10px 10px;
    }

    button {
        & + button {
            margin-left: 15px;
        }
    }
}
</style>
