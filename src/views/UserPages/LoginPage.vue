<script setup>
import { IonPage, IonContent } from "@ionic/vue";
import { useUser } from "@/store/user";
import { ref } from "vue";
import { useRouter } from "vue-router";
import toast from "@/services/toast";
import $loading from "@/services/loading";

const userStore = useUser();
const router = useRouter();

var validationInputs = ref({
    username_email: false,
    password: false,
});

const login = async () => {
    disableBtn.value = true;
    const loader = $loading.show({
        // Optional parameters
    });

    if (username_email.value == "" || password.value == "") {
        toast("top", "danger", "الرجاء ملء كل الحقول");
        validationInputs.value.username_email = true;
        validationInputs.value.password = true;
        loader.hide();
    } else {
        const loginStatus = await userStore.login(
            username_email.value,
            password.value
        );
        if (loginStatus) {
            router.push("/");
            toast("top", "success", "تم تسجيل الدخول بنجاح");
            loader.hide();
        } else {
            toast("top", "danger", "اسم المستخدم او كلمة السر خاطئة");
            loader.hide();
        }
    }
    disableBtn.value = false;
    loader.hide();
};

const username_email = ref("");
const password = ref("");
const disableBtn = ref(false);
</script>

<template>
    <ion-page>
        <ion-content>
            <div
                class="flex flex-col items-center justify-center px-6 py-10 mx-auto lg:py-0"
            >
                <router-link
                    to="/"
                    class="flex items-center mb-6 text-2xl font-semibold text-gray-900 non:text-white"
                >
                    مود بناء
                </router-link>
                <div
                    class="w-full shadow-xl bg-slate-200 rounded-lg non:border md:mt-0 sm:max-w-md xl:p-0 non:bg-gray-800 non:border-gray-700"
                >
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1
                            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl non:text-white"
                        >
                            تسجيل الدخول الي حسابك
                        </h1>
                        <form
                            class="space-y-4 md:space-y-6"
                            @submit.prevent="login()"
                        >
                            <div>
                                <label
                                    for="username_email"
                                    :class="{
                                        'block mb-2 text-sm font-medium text-red-700 dark:text-red-500':
                                            validationInputs.username_email,
                                    }"
                                    class="block mb-2 text-sm font-medium text-gray-900 non:text-white"
                                    >إسم المستخدم أو البريد الإلكتروني</label
                                >
                                <input
                                    v-model="username_email"
                                    :class="{
                                        'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500':
                                            validationInputs.username_email,
                                    }"
                                    @focus="
                                        validationInputs.username_email = false
                                    "
                                    type="text"
                                    name="username_email"
                                    id="username_email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 non:bg-gray-700 non:border-gray-600 non:placeholder-gray-400 non:text-white non:focus:ring-blue-500 non:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    minlength="3"
                                />
                                <p
                                    v-show="validationInputs.username_email"
                                    class="mt-2 text-sm text-red-600 dark:text-red-500"
                                >
                                    <span class="font-medium"></span> الرجاء
                                    ادخال الايميل او اسم المستخدم
                                </p>
                            </div>
                            <div>
                                <label
                                    for="password"
                                    :class="{
                                        'block mb-2 text-sm font-medium text-red-700 dark:text-red-500':
                                            validationInputs.password,
                                    }"
                                    class="block mb-2 text-sm font-medium text-gray-900 non:text-white"
                                    >كلمه السر</label
                                >
                                <input
                                    :class="{
                                        'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500':
                                            validationInputs.password,
                                    }"
                                    @focus="validationInputs.password = false"
                                    v-model="password"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    minlength="6"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 non:bg-gray-700 non:border-gray-600 non:placeholder-gray-400 non:text-white non:focus:ring-blue-500 non:focus:border-blue-500"
                                />
                                <p
                                    v-show="validationInputs.password"
                                    class="mt-2 text-sm text-red-600 dark:text-red-500"
                                >
                                    <span class="font-medium"></span> الرجاء
                                    ادخال كلمة السر
                                </p>
                            </div>

                            <button
                                :disabled="disableBtn"
                                type="submit"
                                class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center non:bg-blue-600 non:hover:bg-blue-700 non:focus:ring-blue-800"
                            >
                                تسجيل الدخول
                            </button>
                            <p
                                class="text-sm font-light text-gray-500 non:text-gray-400"
                            >
                                ليس لديك حساب ؟<router-link
                                    to="/tabs/register"
                                    class="font-medium text-blue-600 hover:underline non:text-blue-500"
                                    >انشئ حساب جديد</router-link
                                >
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
