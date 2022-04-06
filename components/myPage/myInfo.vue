<template>
    <div>
        <v-card outlined tile class="pa-0">
            <v-simple-table class="text-center">
                <template v-slot:default>
                    <tbody>
                        <tr>
                            <td>가입 이메일</td>
                            <td class="px-10 py-5 text-left">
                                <span>{{ userInfo.id }}</span>
                                <v-btn
                                    x-small
                                    color="#ccc"
                                    light
                                    elevation="0"
                                    class="white--text float-right"
                                >회원탈퇴</v-btn>
                            </td>
                        </tr>
                        <tr>
                            <td>비밀번호 변경</td>
                            <td class="px-10 py-5">
                                <v-row>
                                    <v-col cols="12" class="d-flex pl-0 pt-0 pb-1">
                                        <v-subheader class="mt-n1">현재 비밀번호</v-subheader>
                                        <v-text-field
                                            outlined
                                            dense
                                            type="password"
                                            clearable
                                            background-color="white"
                                            hide-details="auto"
                                            single-line
                                            :value="userInfo.password"
                                            style="max-width:250px;"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" class="d-flex pl-0 pt-0 pb-1">
                                        <v-subheader class="mt-n1">신규 비밀번호</v-subheader>
                                        <v-text-field
                                            outlined
                                            dense
                                            type="password"
                                            clearable
                                            background-color="white"
                                            hide-details="auto"
                                            single-line
                                            v-model="userInfo.newPassword"
                                            style="max-width:250px;"
                                            hint="비밀번호는 6~15자 이내로 영문(대문자, 소문자), 숫자 조합으로 작성하시면 됩니다."
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" class="d-flex pl-0 pt-0 pb-0">
                                        <v-subheader class="mt-n1">비밀번호 확인</v-subheader>
                                        <v-text-field
                                            outlined
                                            dense
                                            type="password"
                                            clearable
                                            background-color="white"
                                            hide-details="auto"
                                            single-line
                                            v-model="userInfo.reconfirmPassword"
                                            style="max-width:250px;"
                                            hint="비밀번호는 6~15자 이내로 영문(대문자, 소문자), 숫자 조합으로 작성하시면 됩니다."
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </td>
                        </tr>
                        <tr>
                            <td>이름</td>
                            <td class="px-10 py-5">
                                <v-text-field
                                    outlined
                                    dense
                                    clearable
                                    background-color="white"
                                    hide-details="auto"
                                    single-line
                                    v-model="userInfo.name"
                                    style="max-width:345px;"
                                ></v-text-field>
                            </td>
                        </tr>
                        <tr>
                            <td>가입 유형</td>
                            <td class="px-10 py-5">
                                <v-card
                                    flat
                                    class="d-flex justify-start"
                                    color="transparent"
                                >
                                    <v-chip-group
                                        active-class="purple white--text"
                                        class="py-0"
                                        v-model="userInfo.type"
                                    >
                                        <v-chip
                                            class="px-7 my-0"
                                            value="student"
                                        >
                                            학생
                                        </v-chip>
                                        <v-chip
                                            class="px-7 my-0"
                                            value="parent"
                                        >
                                            학부모
                                        </v-chip>
                                    </v-chip-group>
                                </v-card>
                            </td>
                        </tr>
                        <tr>
                            <td>닉네임</td>
                            <td class="px-10 py-5">
                                <v-text-field
                                    outlined
                                    dense
                                    clearable
                                    background-color="white"
                                    hide-details="auto"
                                    single-line
                                    v-model="userInfo.nickname"
                                    style="max-width:345px;"
                                ></v-text-field>
                            </td>
                        </tr>
                        <tr>
                            <td>학교</td>
                            <td class="px-10 py-5">
                                <v-text-field
                                    placeholder="ex) 서울고등학교"
                                    outlined
                                    dense
                                    clearable
                                    background-color="white"
                                    hide-details="auto"
                                    single-line
                                    v-model="userInfo.school"
                                    style="max-width:345px;"
                                ></v-text-field>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card>
        <v-container fluid class="text-center">
            <v-btn
                x-large
                tile
                width="300"
                color="indigo accent-4"
                class="my-12 white--text title font-weight-bold"
            >수정</v-btn>
        </v-container>
    </div>
</template>

<script>
export default {
  props: ['userInfo']
}
</script>

<style scoped>
    .v-data-table td:first-child {
        width: 250px;
        border-right: 1px solid #ddd;
        font-weight: 700;
    }
    .v-data-table td:last-child {
        text-align: left;
    }
    @media (max-width: 600px){
        .v-data-table td {
            padding: 15px !important
        }
        .v-data-table td:first-child {
            width: 80px;
        }
    }
</style>