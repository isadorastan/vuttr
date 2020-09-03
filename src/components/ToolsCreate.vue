<template>
    <div class="tools-create">
        <Loading :show="loading" />
        <Modal :show="show" @on-modal-close="onClose">
            <h5>+ Add new tool</h5>
                <Input
                    v-model="formData.toolName.value"
                    :label="formData.toolName.label"
                    :valid="formData.toolName.valid"
                    :validation="formData.toolName.validation.message"
                />

                <Input
                    v-model="formData.toolLink.value"
                    :label="formData.toolLink.label"
                    :valid="formData.toolLink.valid"
                    :validation="formData.toolLink.validation.message"
                />

                <Input
                    v-model="formData.toolDescription.value"
                    :label="formData.toolDescription.label"
                    :valid="formData.toolDescription.valid"
                    :validation="formData.toolDescription.validation.message"
                />

                <Input
                    v-model="formData.toolTags.value"
                    :label="formData.toolTags.label"
                    :valid="formData.toolTags.valid"
                    :validation="formData.toolTags.validation.message"
                />

                <Button cta="Add tool" @click="validateCreateForm"/>
        </Modal>
    </div>
</template>

<script>
import Modal from '../components/Modal';
import Button from '../components/Button'; 
import Input from '../components/Input';
import Loading from '../components/Loading';

import '../mixins/globalMixins';
import axios from 'axios';

export default {
    name: 'ToolCreate',
    components: {
        Modal,
        Input,
        Button,
        Loading
    },
    data: () => {
        return {
            loading: false,
            show: false,
            formData: {
                toolName: {
                    label: 'Tool name',
                    value: '',
                    validation: {
                        message: 'Name is mandatory'
                    },
                    valid: true
                },
                toolLink: {
                    label: 'Tool Link',
                    value: '',
                    validation: {
                        message: 'Link is mandatory'
                    },
                    valid: true
                },
                toolDescription: {
                    label: 'Tool description',
                    value: '',
                    validation: {
                        message: 'Description is mandatory'
                    },
                    valid: true
                },
                toolTags: {
                    label: 'Tags',
                    value: '',
                    validation: {
                        message: 'At least one tag'
                    },
                    valid: true
                }
            }
        };
    },
    computed: {
        name() {
            return this.formData.toolName;
        },
        link() {
            return this.formData.toolLink;
        },
        description() {
            return this.formData.toolDescription;
        },
        tags() {
            return this.formData.toolTags;
        },
        isFormValid() {
            return this.name.valid && this.link.valid && this.description.valid && this.tags.value;
        },
        formatTags() {
            return this.tags.value.split(' ');
        }
    },
    methods: {
        openCreateModal() {
            this.show = true;
        },
        onClose() {
            this.show = false;
        },
        validateCreateForm() {
            this.name.valid = this.minLength(1)(this.name.value);
            this.link.valid = this.minLength(1)(this.link.value);
            this.description.valid = this.minLength(1)(this.description.value);
            this.tags.valid = this.minLength(1)(this.tags.value);

            if(!this.isFormValid) return;
            console.log('FORM VALID');
            this.createNewTool();
        },
        createNewTool() {
            this.loading = true;
            axios.post('http://localhost:3000/tools', {
                title: this.name.value,
                link: this.link.value,
                description: this.description.value,
                tags: this.formatTags
            }).then(() => {
                setTimeout(() => {
                    // Only to simulate the request time and show loading;
                    this.loading = false;
                    this.clearForm();
                    this.$emit('on-tool-created');
                    this.show = false;
                }, 3000);
            }).catch(error => {
                console.error(error);
            });
        },
        clearForm() {
            this.name.value = '';
            this.link.value = '';
            this.description.value = '';
            this.tags.value = '';
        }
    }
};
</script>

<style></style>
