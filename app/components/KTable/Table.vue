<template>
    <div class="flex flex-col">
        <div class="flex-grow overflow-auto">
            <table class="table-auto w-full relative">
                <thead class="bg-gray-100 text-gray-600 text-sm font-semibold sticky top-0 border border-gray-300 rounded-t-lg">
                    <tr>
                        <slot name="thead"></slot>
                    </tr>
                </thead>
                <tbody class="text-xs sm:text-sm border border-gray-200">
                    <slot name="tbody"></slot>
                </tbody>
            </table>
        </div>
    </div>
</template>
